const supabase = require("../config/supabase");
const userRepository = require("../repository/userRepository");

class AuthService {
  async register(email, password, name, role) {
    try {
      const existingUser = await userRepository.findByEmail(
        email
      );
      if (existingUser) {
        throw new Error("Email sudah terdaftar");
      }

      const { data, error: supabaseError } =
        await supabase.auth.signUp(
          {
            email,
            password,
          },
          {
            data: { name },
          }
        );

      if (supabaseError) {
        throw new Error(supabaseError.message);
      }

      const user = await userRepository.create({
        email,
        name,
        role,
        supabaseId: data.user.id,
      });

      return { user, supabaseUser: data.user };
    } catch (error) {
      throw error;
    }
  }

  async login(email, password) {
    try {
      const { data, error } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (error) {
        throw new Error(error.message);
      }

      return {
        user: data.user,
        session: data.session,
      };
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    try {
      await supabase.auth.signOut();
      return { message: "Logout berhasil" };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new AuthService();
