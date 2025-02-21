import { Injectable } from '@nestjs/common';
import {
  OpenAICompletionRequest,
  OpenAICompletionResponse,
} from './lib/interfaces';

@Injectable()
export class AppService {
  async ask(question: string): Promise<string> {
    const body: OpenAICompletionRequest = { prompt: question };
    try {
      const response = await fetch(`${process.env.FASTAPI_URL}/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data: OpenAICompletionResponse = await response.json();
      return data.response;
    } catch (err: any) {
      console.error(err.message);
      return err.message;
    }
  }
}
