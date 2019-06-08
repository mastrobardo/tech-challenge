import { Selector } from 'testcafe';
fixture `Getting Started`
    .page `http://localhost:8000`;

test('A contact is added', async t => {
    await t
        .click('#btn-add')
        .expect(Selector('.container').childElementCount).eql(1);
});

test('Only 1 contact is being added', async t => {
    await t
        .click('#btn-add')
        .click('#btn-add')
        .click('#btn-add')
        .expect(Selector('.container').childElementCount).eql(1);
});