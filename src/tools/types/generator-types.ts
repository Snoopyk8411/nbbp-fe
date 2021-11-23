import { CallEffect, PutEffect, SelectEffect } from 'redux-saga/effects';

export type TypeToGenerator<IncomeType> = Generator<
  CallEffect<IncomeType> | PutEffect<{ payload: IncomeType | Error; type: string }> | SelectEffect,
  void,
  never
>;
