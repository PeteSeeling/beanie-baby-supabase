const supabase_Url = 'https://osvbnemrpkxnsdboazbe.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwODkwMywiZXhwIjoxOTU1MDg0OTAzfQ.WbfpkieH6xyID6pt237Vr_Y78Fs1wnkmUdHXoHg5twU';
const client = supabase.createClient(supabase_Url, SUPABASE_KEY);

export async function getPlanes() {
    const response = await client

        .from ('airplanes');
      
    return response.data;
}

export async function getPlane(id){
    const response = await client

        .from('airplanes')
        .select()
        .match({ id: id })
        .single();
    return response.data;
}

// function checkError({ data, error }) {
//     return error ? console.error(error) : data;


