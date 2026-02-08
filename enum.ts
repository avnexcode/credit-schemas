import {
	LoginProvider,
	UserRole,
	Theme,
	Language,
	Gender,
	MaritalStatus,
	EmploymentType,
	Relationship,
	LoanType,
	ApplicationStatus,
	CreditScore,
	LoanStatus,
	PaymentStatus,
} from './generated/prisma/enums.js';

export const loginProvider = Object.values(LoginProvider) as [
	LoginProvider,
	...LoginProvider[],
];
export const userRole = Object.values(UserRole) as [UserRole, ...UserRole[]];

export const theme = Object.values(Theme) as [Theme, ...Theme[]];

export const language = Object.values(Language) as [Language, ...Language[]];

export const gender = Object.values(Gender) as [Gender, ...Gender[]];

export const maritalStatus = Object.values(MaritalStatus) as [
	MaritalStatus,
	...MaritalStatus[],
];

export const employmentType = Object.values(EmploymentType) as [
	EmploymentType,
	...EmploymentType[],
];

export const relationship = Object.values(Relationship) as [
	Relationship,
	...Relationship[],
];

export const loanType = Object.values(LoanType) as [LoanType, ...LoanType[]];

export const applicationStatus = Object.values(ApplicationStatus) as [
	ApplicationStatus,
	...ApplicationStatus[],
];

export const creditScore = Object.values(CreditScore) as [
	CreditScore,
	...CreditScore[],
];

export const loanStatus = Object.values(LoanStatus) as [
	LoanStatus,
	...LoanStatus[],
];

export const paymentStatus = Object.values(PaymentStatus) as [
	PaymentStatus,
	...PaymentStatus[],
];
