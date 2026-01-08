<h1>CC37 Development Proxy</h1>

<h3>What is it?</h3>
<p>
เป็น Code Proxy สำหรับ ใครที่ไม่อยากจะมานั้ง Config เเละ Deploy Server เองเพื่อเทส Frontend
</p>

<h3>For what?</h3>
<p>อย่างเเรกคือถ้า Deploy เองเเล้วใช้ Domain เดียวกันทั้ง Backend เเละ Frontend ก็จะเชื่อมต่อได้ปกติ เเต่ ถ้า เลือกที่จะให้ Domain Test ที่ Deploy ให้ (https://dev-cc37.aboutnon.in.th) จะทำให้ Cookie State ของ Better Auth หากันไม่เจอเเละจะทำให้เกิด Error เชื่อมต่อ Login เเบบ Social (Google) ไม่ได้ ทำให้ต้องใข้ Reverse Proxy มาคั้นเอาไว้เพื่อให้สามารถ Request ไปที่ Localhost เเต้ Proxy Server จะส่งต่อไปที่ dev-cc37.aboutnon.in.th อัตโนมัติ (เหมือนสับขาหลอก)</p>

<h3>Requirements</h3>
<ul>
  <li>NodeJS</li>
  <li>pnpm</li>
  <li>Git</li>
</ul>



<h3>How to use?</h3>
<p>1. ติดตั้ง NodeJS เเละ Git ในเครื่องก่อน (ถ้ายังไม่มี)</p>
<p>2. ติดตั้ง pnpm ในเครื่อง (ถ้ายังไม่มี)</p>
<p>3. Clone Repo นี้มาไว้ในเครื่อง</p>
<pre><code>git clone https://github.com/your-repo/reverse-proxy.git
cd reverse-proxy
</code></pre>
<p>4. รันคำสั่งติดตั้ง Dependencies</p>
<pre><code>pnpm install
</code></pre>
<p>5. รัน Proxy Server</p>
<pre><code>pnpm start
</code></pre>
<p>6. เปิด Browser เเล้วเข้าไปที่ <a href="http://localhost:3030">http://localhost:3030</a> เพื่อทดสอบใช้งาน</p>

