import {
	ApplicationStatus,
	CreditScore,
	EmploymentType,
	Gender,
	Language,
	LoanStatus,
	LoanType,
	LoginProvider,
	MaritalStatus,
	NotificationPriority,
	NotificationType,
	PaymentStatus,
	QuestionCategory,
	QuestionType,
	Relationship,
	ReportType,
	Theme,
	UserRole,
} from './generated/prisma/enums.js';

const enumToObject = <T extends Record<string, string | number>>(model: T) => {
	return Object.values(model) as [T[keyof T], ...T[keyof T][]];
};

export const loginProvider = Object.values(LoginProvider) as [
	LoginProvider,
	...LoginProvider[],
];
export const userRole = Object.values(UserRole) as [UserRole, ...UserRole[]];

export const theme = Object.values(Theme) as [Theme, ...Theme[]];

export const language = Object.values(Language) as [Language, ...Language[]];

export const gender = enumToObject(Gender);

export const maritalStatus = enumToObject(MaritalStatus);

export const employmentType = enumToObject(EmploymentType);

export const relationship = enumToObject(Relationship);

export const loanType = enumToObject(LoanType);

export const applicationStatus = enumToObject(ApplicationStatus);

export const creditScore = enumToObject(CreditScore);

export const loanStatus = enumToObject(LoanStatus);

export const paymentStatus = enumToObject(PaymentStatus);

export const reportType = enumToObject(ReportType);

export const notificationType = enumToObject(NotificationType);

export const notificationPriority = enumToObject(NotificationPriority);

export const questionType = enumToObject(QuestionType);

export const questionCategory = enumToObject(QuestionCategory);
