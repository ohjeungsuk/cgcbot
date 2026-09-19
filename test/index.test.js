const test = require('node:test');
const assert = require('node:assert/strict');
const {
  buildHelpEmbed,
  buildMentionContent,
  buildTeamButtons,
  buildTeamEmbed,
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
  const readyButtons = buildTeamButtons('session').toJSON();
  const dispatchedButtons = buildTeamButtons('session', 'dispatched').toJSON();

  assert.equal(teamEmbed.fields.length, 3);
  assert.equal(helpEmbed.fields.length, 4);
  assert.equal(readyButtons.components[0].disabled, false);
  assert.equal(readyButtons.components[1].disabled, true);
  assert.equal(dispatchedButtons.components[0].disabled, true);
  assert.equal(dispatchedButtons.components[1].disabled, false);
});
