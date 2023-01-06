import {handler} from "./../index"
import {data} from "./data"
import {mockClient} from 'aws-sdk-client-mock';
//import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

//const dbMock = mockClient(DynamoDBClient);

/**
 * To be sure that unit tests are independent from each other,
 * reset mock behavior between the tests.
 */
/*beforeEach(() => {
  dbMock.reset();
});*/
test("test for correct petition",async ()=>{   
   //data.body = JSON.stringify({content:"tweet"})
   const result = await handler(data);	
   expect(result.statusCode).toBe(204)
})
})

