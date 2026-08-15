import { NextResponse } from "next/server";

export async function GET() {
  const githubRawPS1 = process.env.GITHUB_RAW_PS1!;

  if (!githubRawPS1) {
    return new NextResponse("URL do install.ps1 não configurada no servidor.", {
      status: 500,
    });
  }

  try {
    const response = await fetch(githubRawPS1);

    if (!response.ok) {
      return new NextResponse("Erro ao buscar o script de instalação.", {
        status: 502,
      });
    }

    const scriptContent = await response.text();

    return new NextResponse(scriptContent, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  } catch (error) {
    return new NextResponse("Erro interno no servidor.", { status: 500 });
  }
}
