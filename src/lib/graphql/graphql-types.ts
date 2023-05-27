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
  JSON: any;
  UUID: any;
  Void: any;
};

export enum Assessment {
  Fail = 'FAIL',
  Pass = 'PASS',
  SoftPass = 'SOFT_PASS',
  Unknown = 'UNKNOWN'
}

export type AuthApp = {
  __typename?: 'AuthApp';
  created: Scalars['DateTime'];
  description: Scalars['String'];
  name: Scalars['String'];
  official: Scalars['Boolean'];
  redirect_hostnames: Array<Scalars['String']>;
  scopes: Array<Scalars['String']>;
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

export type Model = {
  application: Scalars['JSON'];
  applicationType: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
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
  issue_token: Scalars['String'];
  question_assessment: QuestionAssessment;
  reset_password: Scalars['Void'];
  reset_to_new_password: Scalars['Void'];
  set_unit_progress: UnitProgress;
  submit_application: Scalars['UUID'];
};


export type MutationAuth_TokenArgs = {
  app_secret: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  scopes: Array<Scalars['String']>;
};


export type MutationCreate_Citizenship_ApplicationArgs = {
  country_of_birth: Scalars['String'];
  country_of_citizenship: Array<Scalars['String']>;
  country_of_residence: Scalars['String'];
  date_of_birth: Scalars['Int'];
  ethnic_groups: Array<Scalars['String']>;
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  occupations: Array<Scalars['String']>;
  sex: Scalars['String'];
  skills: Array<Scalars['String']>;
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


export type MutationIssue_TokenArgs = {
  scopes: Array<Scalars['String']>;
};


export type MutationQuestion_AssessmentArgs = {
  answer: Scalars['String'];
  course_slug: Scalars['String'];
  question: Scalars['String'];
  question_context?: InputMaybe<Scalars['String']>;
  question_slug: Scalars['String'];
  unit_slug: Scalars['String'];
};


export type MutationReset_PasswordArgs = {
  email: Scalars['String'];
};


export type MutationReset_To_New_PasswordArgs = {
  new_password: Scalars['String'];
  token_id: Scalars['UUID'];
};


export type MutationSet_Unit_ProgressArgs = {
  course_slug: Scalars['String'];
  status: UnitStatus;
  unit_slug: Scalars['String'];
};


export type MutationSubmit_ApplicationArgs = {
  application: Model;
};

export type Query = {
  __typename?: 'Query';
  all_course_progress: Array<Array<UnitProgress>>;
  auth_app?: Maybe<AuthApp>;
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


export type QueryAuth_AppArgs = {
  slug: Scalars['String'];
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
  stripe_customer_id: Scalars['String'];
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
  date_of_birth: Scalars['Int'];
  sex: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  skills: Array<Scalars['String']> | Scalars['String'];
  occupations: Array<Scalars['String']> | Scalars['String'];
  country_of_citizenship: Array<Scalars['String']> | Scalars['String'];
  country_of_birth: Scalars['String'];
  country_of_residence: Scalars['String'];
  ethnic_groups: Array<Scalars['String']> | Scalars['String'];
}>;


export type CreateCitizenshipApplicationMutation = { __typename?: 'Mutation', create_citizenship_application: any };

export type UserCountQueryVariables = Exact<{ [key: string]: never; }>;


export type UserCountQuery = { __typename?: 'Query', user_count: number };

export type Reset_PasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type Reset_PasswordMutation = { __typename?: 'Mutation', reset_password: any };

export type Reset_To_New_PasswordMutationVariables = Exact<{
  token_id: Scalars['UUID'];
  new_password: Scalars['String'];
}>;


export type Reset_To_New_PasswordMutation = { __typename?: 'Mutation', reset_to_new_password: any };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  app_secret: Scalars['String'];
  scopes: Array<Scalars['String']> | Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', auth_token: string };

export type GetAuthAppQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetAuthAppQuery = { __typename?: 'Query', auth_app?: { __typename?: 'AuthApp', name: string, description: string, created: any, redirect_hostnames: Array<string>, scopes: Array<string>, official: boolean } | null };

export type IssueTokenMutationVariables = Exact<{
  scopes: Array<Scalars['String']> | Scalars['String'];
}>;


export type IssueTokenMutation = { __typename?: 'Mutation', issue_token: string };


export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first_name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last_name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"calling_code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"country_code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone_number"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"referrer"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"create_user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"first_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first_name"}}},{"kind":"Argument","name":{"kind":"Name","value":"last_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last_name"}}},{"kind":"Argument","name":{"kind":"Name","value":"calling_code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"calling_code"}}},{"kind":"Argument","name":{"kind":"Name","value":"country_code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"country_code"}}},{"kind":"Argument","name":{"kind":"Name","value":"phone_number"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone_number"}}},{"kind":"Argument","name":{"kind":"Name","value":"referrer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"referrer"}}}]}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"referral_count"}},{"kind":"Field","name":{"kind":"Name","value":"citizenship_status"}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const CrackTimeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CrackTime"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"crack_time"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"seconds"}},{"kind":"Field","name":{"kind":"Name","value":"guesses"}},{"kind":"Field","name":{"kind":"Name","value":"string"}}]}}]}}]} as unknown as DocumentNode<CrackTimeQuery, CrackTimeQueryVariables>;
export const CreateCitizenshipApplicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCitizenshipApplication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"date_of_birth"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sex"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first_name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last_name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skills"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"occupations"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"country_of_citizenship"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"country_of_birth"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"country_of_residence"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ethnic_groups"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"create_citizenship_application"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"date_of_birth"},"value":{"kind":"Variable","name":{"kind":"Name","value":"date_of_birth"}}},{"kind":"Argument","name":{"kind":"Name","value":"sex"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sex"}}},{"kind":"Argument","name":{"kind":"Name","value":"first_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first_name"}}},{"kind":"Argument","name":{"kind":"Name","value":"last_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last_name"}}},{"kind":"Argument","name":{"kind":"Name","value":"skills"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skills"}}},{"kind":"Argument","name":{"kind":"Name","value":"occupations"},"value":{"kind":"Variable","name":{"kind":"Name","value":"occupations"}}},{"kind":"Argument","name":{"kind":"Name","value":"country_of_citizenship"},"value":{"kind":"Variable","name":{"kind":"Name","value":"country_of_citizenship"}}},{"kind":"Argument","name":{"kind":"Name","value":"country_of_birth"},"value":{"kind":"Variable","name":{"kind":"Name","value":"country_of_birth"}}},{"kind":"Argument","name":{"kind":"Name","value":"country_of_residence"},"value":{"kind":"Variable","name":{"kind":"Name","value":"country_of_residence"}}},{"kind":"Argument","name":{"kind":"Name","value":"ethnic_groups"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ethnic_groups"}}}]}]}}]} as unknown as DocumentNode<CreateCitizenshipApplicationMutation, CreateCitizenshipApplicationMutationVariables>;
export const UserCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserCount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_count"}}]}}]} as unknown as DocumentNode<UserCountQuery, UserCountQueryVariables>;
export const Reset_PasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"reset_password"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reset_password"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}]}}]} as unknown as DocumentNode<Reset_PasswordMutation, Reset_PasswordMutationVariables>;
export const Reset_To_New_PasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"reset_to_new_password"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"new_password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reset_to_new_password"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"new_password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"new_password"}}}]}]}}]} as unknown as DocumentNode<Reset_To_New_PasswordMutation, Reset_To_New_PasswordMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"app_secret"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"scopes"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auth_token"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"app_secret"},"value":{"kind":"Variable","name":{"kind":"Name","value":"app_secret"}}},{"kind":"Argument","name":{"kind":"Name","value":"scopes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"scopes"}}}]}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const GetAuthAppDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAuthApp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auth_app"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"redirect_hostnames"}},{"kind":"Field","name":{"kind":"Name","value":"scopes"}},{"kind":"Field","name":{"kind":"Name","value":"official"}}]}}]}}]} as unknown as DocumentNode<GetAuthAppQuery, GetAuthAppQueryVariables>;
export const IssueTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"IssueToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"scopes"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"issue_token"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"scopes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"scopes"}}}]}]}}]} as unknown as DocumentNode<IssueTokenMutation, IssueTokenMutationVariables>;