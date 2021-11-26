import { CallEffect, PutEffect } from 'redux-saga/effects';

export type TypeToGenerator<IncomeType> = Generator<
  CallEffect<IncomeType> | PutEffect<{ payload: IncomeType; type: string }>,
  void,
  never
>;
