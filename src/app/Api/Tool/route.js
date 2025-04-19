export async function GET () {
    const Tool = [
        { name: "Vs Code", logo: "https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/visualstudio.svg" },
        { name: "Windows", logo: "https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/windows.svg" },
        { name: "Photo-Shop", logo: "https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/adobephotoshop.svg" }
    ];

    return Response.json(Tool, { status: 200 });
}

