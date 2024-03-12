import faker from "faker";

class GenerateData {
    async generateEmailAddress() {
        let randomEmail = faker.internet.email().toLowerCase();
        return randomEmail;
    }
}

module.exports = GenerateData;
