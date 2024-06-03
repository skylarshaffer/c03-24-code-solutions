import { ClientError } from './client-error';

interface GradeRequestBody extends ReadableStream<Uint8Array> {
  name: string;
  course: string;
  number: number;
}

interface GradeRequest extends Request {
  body: GradeRequestBody;
}

export function ValidateRequestBody(
  req: GradeRequest,
  reqArray: string[]
): void {
  const missing = [] as string[];
  if (req.body === null) return;
  reqArray.forEach((prop) => {
    Object.prototype.hasOwnProperty.call(req.body, prop) ||
      (req.body[`${prop}`] === undefined && missing.push('name'));
  });
  if (missing.length) {
    throw new ClientError(404, `${missing.join(',')} is required`);
  }
}
