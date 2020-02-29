import {Selector, t} from 'testcafe'

fixture `/*** getting started with testcafe ***/`
    .page `https://devexpress.github.io/testcafe/example/`
    .before(async t =>{ //HOOKS --> before, after, beforeEach, afterEach
        //Test setup goes here
        //await runDatabaseReset()
        //await seedTestData
    })
    .beforeEach(async t =>{
        //Run before each test
        await t.setTestSpeed(1) //JUST FOR DEBUGGING 1 to 0.01
    })
    .after(async t=>{
        //Cleaning  test data
        //Loading and sending data to monitoring system
    })
    .afterEach(async t=>{
        //Run after each test
    })

test("example", async t =>{
    //here goes the code
    await t.typeText("#developer-name", "Felipe")
    await t.click("#submit-button")
            //Assertion - ID,Attribute as ExpectedResult
    await t.expect(Selector('#article-header').innerText).contains("Felipe")
})