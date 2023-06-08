function renderHTML(url) {
    switch (url) {
        case "/home":
            return `
                <html>
                    <b>home页面</b>
                </html>
            `
        case "/list":
            return `
                <html>
                    <div>list页面</div>
                </html>
            `
        case "/api/list":
            return `
                ["list1", "list2", "list3"]
            `
        case "/api/home":
            return `
                {name: "kenvin"}
            `
        default:
            return `
                <html>
                    <div>404 not found</div>
                </html>
            `
    }
}
module.exports = {
    renderHTML
}