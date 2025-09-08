import { faker } from "@faker-js/faker";

export const generateRandomUsername = (): string => {
    return faker.internet.username();
}

export const generateRandomEmail = (): string => {
    return faker.internet.email();
}

export const generateRandomPassword = (): string => {
    return faker.internet.password();
}

export const generateRandomTitle = (): string => {
    return faker.book.title();
}

export const generateRandomDescription = (): string => {
    return faker.lorem.sentence();
}

export const generateRandomBody = (): string => {
    return faker.lorem.paragraphs(1);
}

export const generateRandomTag = (): string => {
    return faker.lorem.word();
}