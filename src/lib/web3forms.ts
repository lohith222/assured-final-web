const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export const WEB3FORMS_ACCESS_KEY = "8a4137bd-9ab8-4d41-a6b2-717bf19f190e";

export type Web3FormsResult =
  | { ok: true }
  | { ok: false; message: string };

export async function submitToWeb3Forms(
  fields: Record<string, string>,
  subject: string,
): Promise<Web3FormsResult> {
  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject,
        from_name: "Assured Life Website",
        ...fields,
      }),
    });

    const data = await response.json();

    if (response.ok && data.success) {
      return { ok: true };
    }

    return {
      ok: false,
      message: data.message || "Something went wrong. Please try again.",
    };
  } catch (error) {
    return {
      ok: false,
      message: "Network error. Please check your connection and try again.",
    };
  }
}