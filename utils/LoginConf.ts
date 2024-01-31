import { DefaultAzureCredential } from "@azure/identity";
import { SecretClient } from "@azure/keyvault-secrets";
import { setLogLevel } from "@azure/logger";

export async function GetSecretClient(url: string) {
  return new SecretClient(url, new DefaultAzureCredential());
}

// Try fetch Secrets from Key Vault or throw error
export async function getSecret(client: SecretClient, secret_name: string) {
    setLogLevel("error")
  try {
    const secretbody = await client.getSecret(secret_name);
    return secretbody.value;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
