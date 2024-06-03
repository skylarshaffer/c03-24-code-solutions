import { ClientError } from './client-error';

interface GradeRequestBody extends ReadableStream<Uint8Array> {
  name: string;
  course: string;
  number: number;
}

export function ValidateRequestBody(
  reqBody: GradeRequestBody,
  reqArray: string[] = ['name', 'course', 'number']
): void {
  const missing = [] as string[];
  if (reqBody === null) return;
  reqArray.forEach((prop) => {
    Object.prototype.hasOwnProperty.call(reqBody, prop) ||
      (reqBody[prop] === undefined && missing.push('name'));
  });
  if (missing.length) {
    throw new ClientError(404, `${missing.join(',')} is required`);
  }
}
