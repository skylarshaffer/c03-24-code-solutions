import { ClientError } from './client-error';

type GradeRequestBody = {
  name?: string;
  course?: string;
  score?: number;
};

type GradeRequestParams = {
  gradeId?: string;
};

type GradeRequest = {
  body: GradeRequestBody;
  params: GradeRequestParams;
};

export function ValidateRequestBody(req: GradeRequest): void {
  const reqParams = { ...req.body, ...req.params };
  const missing = [] as string[];
  for (const param in reqParams) {
    (param === undefined || param === '') && missing.push(`${param}`);
  }
  if (missing.length) {
    throw new ClientError(404, `${missing.join(',')} is required`);
  }
  if (reqParams.score != null) {
    if (!Number.isInteger(reqParams.score)) {
      throw new ClientError(400, `Non-integer score: ${reqParams.score}`);
    } else if (reqParams.score > 100 || reqParams.score < 0) {
      throw new ClientError(
        400,
        `score is not in the range of 1-100: ${reqParams.score}`
      );
    }
  }
  if (reqParams.gradeId != null) {
    if (!Number.isInteger(+reqParams.gradeId)) {
      throw new ClientError(400, `Non-integer gradeId: ${reqParams.gradeId}`);
    }
  }
}
