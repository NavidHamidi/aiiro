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
      const response = await fetch('http://localhost:5000/generate', {
        // http://fastapi-llm:5000/generate
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
