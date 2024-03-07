import faker from "faker";

class GenerateData {
    async generateEmailAddress() {
        let randomEmail = faker.internet.email().toLowerCase();
        console.log(randomEmail);
        return randomEmail;
    }
}

module.exports = GenerateData;
