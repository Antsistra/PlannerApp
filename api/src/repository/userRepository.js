const { PrismaClient } = require("@prisma/client");

class UserRepository {
  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(data) {
    return this.prisma.user.create({ data });
  }

  async findByEmail(email) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async findBySupabaseId(supabaseId) {
    return this.prisma.user.findUnique({
      where: { supabaseId },
    });
  }
}

module.exports = new UserRepository();
