import { APIGatewayEvent,APIGatewayProxyResult } from "aws-lambda";
import {ExceptionFilter, ResponseNotContent} from "@microservices-aws-achitecture/commons"

export const handler = async (event:APIGatewayEvent):Promise<APIGatewayProxyResult>=>{
	try{
		return new ResponseNotContent();
	}
	catch(e){
		return ExceptionFilter(e); 
	}
}

