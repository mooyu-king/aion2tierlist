// 只返回 IP 推导的粗略地区和时区，不返回/保存原始 IP 或坐标。
export async function onRequestGet(context) {
    const geo = context.request.cf;
    const code = (s) => typeof s === 'string' && /^[A-Z]{2}$/.test(s) ? s : null;
    let timezone = null;
    try {
        if (typeof geo?.timezone === 'string') {
            new Intl.DateTimeFormat('en', { timeZone: geo.timezone });
            timezone = geo.timezone;
        }
    }
    catch { }
    return new Response(JSON.stringify({ country: code(geo?.country), continent: code(geo?.continent), timezone }), { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'private, no-store', 'X-Content-Type-Options': 'nosniff' } });
}
