export type ConfigProtocol = "tcp" | "udp" | "http";

export interface Config {
    mappings: {
        name: string;
        protocols: ConfigProtocol[];
        host: string;
        listenPort: number;
        targetPort: number;
    }[]
}

export const config: Config = {
    mappings: [
        {
            name: "CC37_dev",
            protocols: ["http"], 
            host: "dev-cc37.aboutnon.in.th",
            listenPort: 3030, 
            targetPort: 80
        }
    ]
}