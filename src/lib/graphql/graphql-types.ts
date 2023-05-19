import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  DateTime: any;
  UUID: any;
};

export enum Assessment {
  Fail = 'FAIL',
  Pass = 'PASS',
  SoftPass = 'SOFT_PASS',
  Unknown = 'UNKNOWN'
}

export type CitizenshipApplicationInput = {
  country_of_birth: Scalars['String'];
  country_of_citizenship: Array<Scalars['String']>;
  country_of_residence: Scalars['String'];
  date_of_birth: Scalars['DateTime'];
  ethnic_groups: Array<Scalars['String']>;
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  occupations: Array<Scalars['String']>;
  sex: Scalars['String'];
  skills: Array<Scalars['String']>;
};

export enum CitizenshipStatus {
  Approved = 'APPROVED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type CrackSeconds = {
  __typename?: 'CrackSeconds';
  guesses: Scalars['Float'];
  seconds: Scalars['Float'];
  string: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Returns an authentication token if the
   * user is found and the password matches
   */
  auth_token: Scalars['String'];
  create_citizenship_application: Scalars['UUID'];
  create_light_university_checkout_session: Scalars['String'];
  create_user: Scalars['UUID'];
  question_assessment: QuestionAssessment;
  set_unit_progress: UnitProgress;
};


export type MutationAuth_TokenArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreate_Citizenship_ApplicationArgs = {
  citizenship_application: CitizenshipApplicationInput;
};


export type MutationCreate_Light_University_Checkout_SessionArgs = {
  success_url: Scalars['String'];
};


export type MutationCreate_UserArgs = {
  calling_code: Scalars['String'];
  country_code: Scalars['String'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  password: Scalars['String'];
  phone_number: Scalars['String'];
  referrer?: InputMaybe<Scalars['UUID']>;
};


export type MutationQuestion_AssessmentArgs = {
  answer: Scalars['String'];
  course_slug: Scalars['String'];
  question: Scalars['String'];
  question_context?: InputMaybe<Scalars['String']>;
  question_slug: Scalars['String'];
  unit_slug: Scalars['String'];
};


export type MutationSet_Unit_ProgressArgs = {
  course_slug: Scalars['String'];
  status: UnitStatus;
  unit_slug: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  all_course_progress: Array<Array<UnitProgress>>;
  course_progress: Array<UnitProgress>;
  /**
   * Returns the crack time of a password
   * Used for password strength estimation
   * On the frontend
   */
  crack_time: CrackSeconds;
  last_updated_unit?: Maybe<UnitProgress>;
  me?: Maybe<User>;
  ping: Scalars['String'];
  question_assessment?: Maybe<QuestionAssessment>;
  user_count: Scalars['Int'];
  user_count_by_interval: Array<Scalars['Int']>;
};


export type QueryCourse_ProgressArgs = {
  course_slug: Scalars['String'];
};


export type QueryCrack_TimeArgs = {
  password: Scalars['String'];
};


export type QueryQuestion_AssessmentArgs = {
  course_slug: Scalars['String'];
  question_slug: Scalars['String'];
  unit_slug: Scalars['String'];
};


export type QueryUser_Count_By_IntervalArgs = {
  count: Scalars['Int'];
  interval: Scalars['Int'];
};

export type QuestionAssessment = {
  __typename?: 'QuestionAssessment';
  answer: Scalars['String'];
  assessment: Assessment;
  course_slug: Scalars['String'];
  feedback: Scalars['String'];
  id: Scalars['UUID'];
  question_slug: Scalars['String'];
  unit_slug: Scalars['String'];
  updated_at: Scalars['DateTime'];
  user_id: Scalars['UUID'];
};

export type SubscriptionInfo = {
  __typename?: 'SubscriptionInfo';
  expiry_date?: Maybe<Scalars['DateTime']>;
  status: SubscriptionStatus;
};

export enum SubscriptionStatus {
  Expiring = 'EXPIRING',
  None = 'NONE',
  Renewing = 'RENEWING'
}

export type UnitProgress = {
  __typename?: 'UnitProgress';
  course_slug: Scalars['String'];
  id: Scalars['UUID'];
  status: UnitStatus;
  unit_slug: Scalars['String'];
  updated_at: Scalars['DateTime'];
  user_id: Scalars['UUID'];
};

export enum UnitStatus {
  Completed = 'COMPLETED',
  InProgress = 'IN_PROGRESS',
  NotStarted = 'NOT_STARTED'
}

export type User = {
  __typename?: 'User';
  calling_code: Scalars['String'];
  citizenship_status?: Maybe<CitizenshipStatus>;
  country_code: Scalars['String'];
  customer_portal_url: Scalars['String'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['UUID'];
  joined: Scalars['DateTime'];
  last_name: Scalars['String'];
  phone_number: Scalars['String'];
  referral_count: Scalars['Int'];
  role?: Maybe<Scalars['String']>;
  roles: Array<Scalars['String']>;
  stripe_subscription_info: SubscriptionInfo;
};


export type UserCustomer_Portal_UrlArgs = {
  return_url?: InputMaybe<Scalars['String']>;
};

export type CreateUserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  calling_code: Scalars['String'];
  country_code: Scalars['String'];
  phone_number: Scalars['String'];
  referrer?: InputMaybe<Scalars['UUID']>;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', create_user: any };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: any, email: string, first_name: string, last_name: string, roles: Array<string>, referral_count: number, citizenship_status?: CitizenshipStatus | null } | null };

export type CrackTimeQueryVariables = Exact<{
  password: Scalars['String'];
}>;


export type CrackTimeQuery = { __typename?: 'Query', crack_time: { __typename?: 'CrackSeconds', seconds: number, guesses: number, string: string } };

export type CreateCitizenshipApplicationMutationVariables = Exact<{
  input: CitizenshipApplicationInput;
}>;


export type CreateCitizenshipApplicationMutation = { __typename?: 'Mutation', create_citizenship_application: any };

export type UserCountQueryVariables = Exact<{ [key: string]: never; }>;


export type UserCountQuery = { __typename?: 'Query', user_count: number };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', auth_token: string };


export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first_name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last_name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"calling_code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"country_code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone_number"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"referrer"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"create_user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"first_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first_name"}}},{"kind":"Argument","name":{"kind":"Name","value":"last_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last_name"}}},{"kind":"Argument","name":{"kind":"Name","value":"calling_code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"calling_code"}}},{"kind":"Argument","name":{"kind":"Name","value":"country_code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"country_code"}}},{"kind":"Argument","name":{"kind":"Name","value":"phone_number"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone_number"}}},{"kind":"Argument","name":{"kind":"Name","value":"referrer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"referrer"}}}]}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"referral_count"}},{"kind":"Field","name":{"kind":"Name","value":"citizenship_status"}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const CrackTimeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CrackTime"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"crack_time"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"seconds"}},{"kind":"Field","name":{"kind":"Name","value":"guesses"}},{"kind":"Field","name":{"kind":"Name","value":"string"}}]}}]}}]} as unknown as DocumentNode<CrackTimeQuery, CrackTimeQueryVariables>;
export const CreateCitizenshipApplicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCitizenshipApplication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CitizenshipApplicationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"create_citizenship_application"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"citizenship_application"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<CreateCitizenshipApplicationMutation, CreateCitizenshipApplicationMutationVariables>;
export const UserCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserCount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_count"}}]}}]} as unknown as DocumentNode<UserCountQuery, UserCountQueryVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auth_token"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;