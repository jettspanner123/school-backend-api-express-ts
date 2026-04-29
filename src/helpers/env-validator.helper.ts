export default class EnvValidator {
    public static getEnv(key: string): string {
        const value = process.env[key];
        if (!value) throw new Error(`Env Key Not Found: ${key}`);
        return value;
    }
}
