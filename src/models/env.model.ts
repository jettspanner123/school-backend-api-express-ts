export type NodeEnvironment = "development" | "production" | "test";

export interface EnvironmentVariables {
    readonly NODE_ENV: NodeEnvironment;
    readonly PORT: number;
}
