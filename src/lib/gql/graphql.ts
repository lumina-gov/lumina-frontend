/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * Combined date and time (with time zone) in [RFC 3339][0] format.
   *
   * Represents a description of an exact instant on the time-line (such as the
   * instant that a user account was created).
   *
   * [`DateTime` scalar][1] compliant.
   *
   * See also [`chrono::DateTime`][2] for details.
   *
   * [0]: https://datatracker.ietf.org/doc/html/rfc3339#section-5
   * [1]: https://graphql-scalars.dev/docs/scalars/date-time
   * [2]: https://docs.rs/chrono/latest/chrono/struct.DateTime.html
   */
  DateTime: any;
  Uuid: any;
};

export type CitizenshipApplicationInput = {
  countryOfBirth: Scalars['String'];
  countryOfCitizenship: Array<Scalars['String']>;
  countryOfResidence: Scalars['String'];
  dateOfBirth: Scalars['DateTime'];
  ethnicGroups: Array<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  occupations: Array<Scalars['String']>;
  sex: Scalars['String'];
  skills: Array<Scalars['String']>;
};

export enum CitizenshipStatus {
  Approved = 'APPROVED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type Course = {
  __typename?: 'Course';
  createdAt: Scalars['DateTime'];
  id: Scalars['Uuid'];
  name: Scalars['String'];
  slug: Scalars['String'];
  units: Array<Unit>;
};

export type CrackSeconds = {
  __typename?: 'CrackSeconds';
  guesses: Scalars['Float'];
  seconds: Scalars['Float'];
  string: Scalars['String'];
};

export type CreateCourseInput = {
  name: Scalars['String'];
};

export type CreateUserInput = {
  callingCode: Scalars['String'];
  countryCode: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
  referrer?: InputMaybe<Scalars['String']>;
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  create_citizenship_application: Scalars['Uuid'];
  create_course: Course;
  create_user: Scalars['Uuid'];
  /** Returns a JWT token for the user */
  login: Scalars['String'];
  test: Scalars['String'];
};


export type MutationCreate_Citizenship_ApplicationArgs = {
  citizenship_application: CitizenshipApplicationInput;
};


export type MutationCreate_CourseArgs = {
  course: CreateCourseInput;
};


export type MutationCreate_UserArgs = {
  create_user_input: CreateUserInput;
};


export type MutationLoginArgs = {
  login_user: LoginUserInput;
};

export type Query = {
  __typename?: 'Query';
  course_by_slug?: Maybe<Course>;
  courses: Array<Course>;
  /**
   * Returns the crack time of a password
   * Used for password strength estimation
   * On the frontend
   */
  crack_time: CrackSeconds;
  me?: Maybe<User>;
  user_count: Scalars['Int'];
};


export type QueryCourse_By_SlugArgs = {
  slug: Scalars['String'];
};


export type QueryCrack_TimeArgs = {
  password: Scalars['String'];
};

export type Unit = {
  __typename?: 'Unit';
  course_id: Scalars['Uuid'];
  created_at: Scalars['DateTime'];
  id: Scalars['Uuid'];
  name: Scalars['String'];
  parent_unit?: Maybe<Scalars['Uuid']>;
  slug: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  citizenship_status: CitizenshipStatus;
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['Uuid'];
  last_name: Scalars['String'];
  referrals: Scalars['Int'];
  roles: Array<Scalars['String']>;
};

export type GctQueryVariables = Exact<{
  password: Scalars['String'];
}>;


export type GctQuery = { __typename?: 'Query', crack_time: { __typename?: 'CrackSeconds', seconds: number, guesses: number, string: string } };

export type User_CountQueryVariables = Exact<{ [key: string]: never; }>;


export type User_CountQuery = { __typename?: 'Query', user_count: number };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: any, email: string, first_name: string, last_name: string, roles: Array<string>, referrals: number, citizenship_status: CitizenshipStatus } | null };

export type Create_UserMutationVariables = Exact<{
  ui: CreateUserInput;
}>;


export type Create_UserMutation = { __typename?: 'Mutation', create_user: any };

export type LoginMutationVariables = Exact<{
  user: LoginUserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: string };


export const GctDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"gct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"crack_time"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"seconds"}},{"kind":"Field","name":{"kind":"Name","value":"guesses"}},{"kind":"Field","name":{"kind":"Name","value":"string"}}]}}]}}]} as unknown as DocumentNode<GctQuery, GctQueryVariables>;
export const User_CountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"user_count"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_count"}}]}}]} as unknown as DocumentNode<User_CountQuery, User_CountQueryVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"referrals"}},{"kind":"Field","name":{"kind":"Name","value":"citizenship_status"}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const Create_UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"create_user"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ui"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"create_user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"create_user_input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ui"}}}]}]}}]} as unknown as DocumentNode<Create_UserMutation, Create_UserMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login_user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}}]}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;