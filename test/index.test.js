const test = require('node:test');
const assert = require('node:assert/strict');
const {
  buildHelpEmbed,
  buildMentionContent,
  buildOutingLogEntry,
  buildOutingLogRegistrationEmbed,
  buildOutingPanel,
  buildTeamButtons,
  buildTeamEmbed,
  isBotManager,
  shuffleMembers,
  splitIntoTeams,
} = require('../index');

test('shuffleMembers preserves members without mutating the input', () => {
  const members = [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }];
  const originalOrder = members.map((member) => member.id);
  const shuffled = shuffleMembers(members, () => 0);
  assert.deepEqual(members.map((member) => member.id), originalOrder);
  assert.deepEqual(shuffled.map((member) => member.id).sort(), originalOrder);
  assert.notDeepEqual(shuffled.map((member) => member.id), originalOrder);
});

test('configured bot manager receives the administrator override', () => {
  const noDiscordPermissions = { has: () => false };
  assert.equal(isBotManager('393017142087516160', noDiscordPermissions), true);
  assert.equal(isBotManager('111111111111111111', noDiscordPermissions), false);
});

test('outing log embeds serialize leave and return records', () => {
  const registration = buildOutingLogRegistrationEmbed().toJSON();
  const leave = buildOutingLogEntry({
    userId: '393017142087516160',
    displayName: '핑구',
    action: 'leave',
    timestamp: 1_700_000_000_000,
  }).toJSON();
  const returned = buildOutingLogEntry({
    userId: '393017142087516160',
    displayName: '핑구',
    action: 'return',
    timestamp: 1_700_000_000_000,
  }).toJSON();

  assert.equal(registration.footer.text, '핑구봇 외출 로그 채널');
  assert.equal(leave.title, '🚶 외출 기록');
  assert.equal(returned.title, '🏠 복귀 기록');
  assert.match(leave.fields[0].value, /<@393017142087516160>/);
});

test('splitIntoTeams respects the requested maximum team size', () => {
  const members = Array.from({ length: 7 }, (_, index) => ({ id: String(index + 1) }));
  const teams = splitIntoTeams(members, 3);
  assert.deepEqual(teams.map((team) => team.length), [3, 2, 2]);
  assert.equal(teams.flat().length, members.length);
});

test('buildMentionContent creates team labels and member mentions', () => {
  const content = buildMentionContent([[{ id: '100' }, { id: '200' }], [{ id: '300' }]]);
  assert.match(content, /1팀/);
  assert.match(content, /<@100>/);
  assert.match(content, /2팀/);
  assert.match(content, /<@300>/);
});

test('team and help UI components serialize for Discord API v14', () => {
  const teams = [[{ id: '100' }, { id: '200' }], [{ id: '300' }]];
  const teamEmbed = buildTeamEmbed(teams, 2).toJSON();
  const helpEmbed = buildHelpEmbed().toJSON();
  const outingPanel = buildOutingPanel();
  const outingButtons = outingPanel.components[0].toJSON();
  const readyButtons = buildTeamButtons('session').toJSON();
  const dispatchedButtons = buildTeamButtons('session', 'dispatched').toJSON();

  assert.equal(teamEmbed.fields.length, 3);
  assert.equal(helpEmbed.fields.length, 5);
  assert.equal(outingPanel.embeds[0].toJSON().title, '🐧 외출 · 복귀 상태 관리');
  assert.match(outingPanel.embeds[0].toJSON().fields[0].value, /998138756739633204/);
  assert.equal(outingButtons.components[0].custom_id, 'outing:leave');
  assert.equal(outingButtons.components[1].custom_id, 'outing:return');
  assert.equal(readyButtons.components[0].disabled, false);
  assert.equal(readyButtons.components[1].disabled, true);
  assert.equal(dispatchedButtons.components[0].disabled, true);
  assert.equal(dispatchedButtons.components[1].disabled, false);
});
