Tech assessment for skilling

used webpack init -> here i used a generator  
redux for state  
react for DOM  
localStorage (IndexedDb might have been a better solution but this was faster )  
test cafe for end to end tests  
ava for unit tests  

**BEFORE ANYTHING**  
run ```npm i```. I left that out of everyscript cause might be heavy

REGARDING TESTS  
i only write a couple of tests, forgive me

**RUN DEV**
``` npm run start:dev ```

**BUILD DEV**
``` npm run build:dev ```

**BUILD PROD**
``` npm run build:prod ```

**TEST UNIT**
``` npm run test:unit ```

**TEST END2END**
please note: testcafe  will try to connect to  http://localhost/8000. Either change the port in the code
(if you want to use webpack dev server) 8000 => 9000  
OR run runContainer.sh in a separate terminal window BEFORE running end to end tests  
  
```chmod +x runServer.sh```
to make the script executable  

``` npm run test:2endend ```

i assume testCafe is also installed globally ( as in a Docker container )

**PWA**  
install as usual via chrome menu ( desktop), or just follow the isntructions :)  

**LIGHTHOUSE**  
pretty solid reports, but FCP still a little slow ( should have gone for SSR, now is late). Anyway, give a look with Lighthouse at the production version ( just run .runServerProd.sh)




