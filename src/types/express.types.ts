import { type ErrorRequestHandler, type RequestHandler } from "express";
import { type ParamsDictionary } from "express-serve-static-core";
import { type ParsedQs } from "qs";

export type EmptyObject = Record<string, never>;

export type TypedRequestHandler<TResponseBody = unknown, TRequestBody = EmptyObject, TRouteParams extends ParamsDictionary = ParamsDictionary, TRequestQuery = ParsedQs> = RequestHandler<TRouteParams, TResponseBody, TRequestBody, TRequestQuery>;

export type TypedErrorRequestHandler<TResponseBody = unknown, TRouteParams extends ParamsDictionary = ParamsDictionary, TRequestBody = EmptyObject, TRequestQuery = ParsedQs> = ErrorRequestHandler<TRouteParams, TResponseBody, TRequestBody, TRequestQuery>;
