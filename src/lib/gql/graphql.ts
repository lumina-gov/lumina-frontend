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

export type Application = {
  __typename?: 'Application';
  applicationType: ApplicationType;
  bson: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Uuid'];
  status: ApplicationStatus;
};

export enum ApplicationStatus {
  Accepted = 'ACCEPTED',
  Deliberation = 'DELIBERATION',
  Received = 'RECEIVED',
  Rejected = 'REJECTED'
}

export enum ApplicationType {
  Citizenship = 'CITIZENSHIP',
  Organization = 'ORGANIZATION',
  Pioneer = 'PIONEER'
}

export type CitizenshipApplication = {
  __typename?: 'CitizenshipApplication';
  id: Scalars['Uuid'];
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
  guesses: Scalars['Int'];
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
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCourse: Course;
  createUser: Scalars['Uuid'];
  /** Returns a JWT token for the user */
  login: Scalars['String'];
  submitApplication: Scalars['Boolean'];
  test: Scalars['String'];
};


export type MutationCreateCourseArgs = {
  course: CreateCourseInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationLoginArgs = {
  loginUser: LoginUserInput;
};


export type MutationSubmitApplicationArgs = {
  applicationType: ApplicationType;
  bson: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  courseBySlug?: Maybe<Course>;
  courses: Array<Course>;
  /**
   * Returns the crack time of a password
   * Used for password strength estimation
   * On the frontend
   */
  crackTime: CrackSeconds;
  createCitizenshipApplication: CitizenshipApplication;
  me: User;
  userCount: Scalars['Int'];
};


export type QueryCourseBySlugArgs = {
  slug: Scalars['String'];
};


export type QueryCrackTimeArgs = {
  password: Scalars['String'];
};


export type QueryCreateCitizenshipApplicationArgs = {
  citizenshipApplication: CitizenshipApplicationInput;
};

export type Unit = {
  __typename?: 'Unit';
  courseId: Scalars['Uuid'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Uuid'];
  name: Scalars['String'];
  parentUnit?: Maybe<Scalars['Uuid']>;
  slug: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  applications: Array<Application>;
  id: Scalars['Uuid'];
};


export type UserApplicationsArgs = {
  filterType?: InputMaybe<ApplicationType>;
};

export type SubmitMutationVariables = Exact<{
  bson: Scalars['String'];
  t: ApplicationType;
}>;


export type SubmitMutation = { __typename?: 'Mutation', submitApplication: boolean };


export const SubmitDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"submit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bson"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"t"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ApplicationType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"submitApplication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"bson"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bson"}}},{"kind":"Argument","name":{"kind":"Name","value":"applicationType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"t"}}}]}]}}]} as unknown as DocumentNode<SubmitMutation, SubmitMutationVariables>;