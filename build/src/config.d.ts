export type ConfigProtocol = "tcp" | "udp" | "http";
export interface Config {
    mappings: {
        name: string;
        protocols: ConfigProtocol[];
        host: string;
        listenPort: number;
        targetPort: number;
    }[];
}
export declare const config: Config;
