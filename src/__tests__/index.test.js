"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./../index");
const data_1 = require("./data");
//import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
//const dbMock = mockClient(DynamoDBClient);
/**
 * To be sure that unit tests are independent from each other,
 * reset mock behavior between the tests.
 */
/*beforeEach(() => {
  dbMock.reset();
});*/
test("test for correct petition", () => __awaiter(void 0, void 0, void 0, function* () {
    //data.body = JSON.stringify({content:"tweet"})
    const result = yield (0, index_1.handler)(data_1.data);
    expect(result.statusCode).toBe(204);
}));
