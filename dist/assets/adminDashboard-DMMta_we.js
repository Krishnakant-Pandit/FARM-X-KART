if(localStorage.getItem("adminLogin")!=="1")alert("Please login as admin first!"),window.location.href="/admin/login";else{let a=function(t){return Number(t.total||t.totalPrice||t.amount||t.grandTotal||0)},d=function(t){if(!t)return"-";const e=new Date(t);return isNaN(e.getTime())?t:e.toLocaleDateString("en-IN")},u=function(t){return Array.isArray(t.items)?t.items.length:Array.isArray(t.products)?t.products.length:Number(t.items)||0},g=function(t){return t.customerName||t.name||t.customer||t.userName||t.email||"-"},f=function(t){return t.paymentMethod||t.payment||t.paymentType||"-"},$=function(t){return t.status||"Placed"};var L=a,N=d,S=u,T=g,C=f,p=$;const h=JSON.parse(localStorage.getItem("info"))||{},r=JSON.parse(localStorage.getItem("farmerProducts"))||[],n=JSON.parse(localStorage.getItem("orders"))||[],o=Object.entries(h),I=o.filter(([t,e])=>String(e.account||"").toLowerCase()==="farmer"),E=o.filter(([t,e])=>String(e.account||"").toLowerCase()==="customer");document.getElementById("total-users").textContent=o.length,document.getElementById("total-farmers").textContent=I.length,document.getElementById("total-customers").textContent=E.length,document.getElementById("total-products").textContent=r.length,document.getElementById("total-orders").textContent=n.length,document.getElementById("user-count").textContent=`${o.length} ${o.length===1?"User":"Users"}`,document.getElementById("product-count").textContent=`${r.length} ${r.length===1?"Product":"Products"}`,document.getElementById("order-count").textContent=`${n.length} ${n.length===1?"Order":"Orders"}`;const l=document.getElementById("users-table");l.innerHTML="",o.length===0?l.innerHTML=`
            <tr>
                <td colspan="6">No users registered</td>
            </tr>
        `:o.forEach(([t,e],i)=>{l.innerHTML+=`
                <tr>
                    <td>${i+1}</td>
                    <td>${e.name||"-"}</td>
                    <td>${t}</td>
                    <td>${e.mobile||"-"}</td>
                    <td>${e.gender||"-"}</td>
                    <td>${e.account||"-"}</td>
                </tr>
            `});const c=document.getElementById("products-table");c.innerHTML="",r.length===0?c.innerHTML=`
            <tr>
                <td colspan="7">No products listed</td>
            </tr>
        `:r.forEach((t,e)=>{c.innerHTML+=`
                <tr>
                    <td>${e+1}</td>
                    <td>${t.productName||t.name||"-"}</td>
                    <td>${t.farmerName||t.farmer||"-"}</td>
                    <td>${t.category||"-"}</td>
                    <td>${t.quantity||"-"} ${t.quantityUnit||""}</td>
                    <td>₹${t.expectedPrice||t.price||0}</td>
                    <td>${d(t.dateAdded||t.harvestDate)}</td>
                </tr>
            `});const s=document.getElementById("orders-table");s.innerHTML="",n.length===0?s.innerHTML=`
            <tr>
                <td colspan="8">No orders placed</td>
            </tr>
        `:n.forEach((t,e)=>{const i=t.orderId||t.id||`ORD${String(e+1).padStart(4,"0")}`,B=a(t);s.innerHTML+=`
                <tr>
                    <td>${e+1}</td>
                    <td>${i}</td>
                    <td>${g(t)}</td>
                    <td>${u(t)}</td>
                    <td>${f(t)}</td>
                    <td>₹${B.toFixed(2)}</td>
                    <td>${$(t)}</td>
                    <td>${d(t.date||t.orderDate||t.createdAt)}</td>
                </tr>
            `});const m=n.reduce((t,e)=>t+a(e),0),x=n.length>0?m/n.length:0;document.getElementById("total-revenue").textContent=`₹${m.toFixed(2)}`,document.getElementById("revenue-total").textContent=`₹${m.toFixed(2)}`,document.getElementById("revenue-orders").textContent=n.length,document.getElementById("average-order").textContent=`₹${x.toFixed(2)}`;const y=document.querySelector(".logout");y&&y.addEventListener("click",function(){localStorage.removeItem("adminLogin"),localStorage.removeItem("adminEmail"),window.location.href="/admin/login"})}
