import React, { useState } from 'react';

export default function changePasswordAccount() {

    return (

<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
       <div class="topnav">
            <b>PourDecisions</b>
            <a>Mix</a>
            <a>Drinks</a>
            <a>Search</a>
            <a>Login</a>
        </div>

<header class="dark">
<h1>Enter the following information below</h1>
</header>


<div>

<img src="./martini.png" title="Martini Glass" style="float:right" width=500px>

<table>
<tr>
<th>
<p style="font-size:25px; color: #7E003E;"><b>Username</b></p>
</th>
<td style="padding-left:200px;text-align:center;">
<p class="dark" style="font-size:25px"><b>Anika</b></p>
</td>
</tr>

<tr>
<th>
<p style="font-size:25px; color: #7E003E;"><b>Password</b></p>
</th>
<td style="padding-left: 200px">
<input v-model="oldPass" placeholder="Old Password">
<input v-model="newPass" placeholder="New Password">
<input v-model="confirmPass" placeholder="Confirm New Password">
</td>
</tr>

<tr>
<th>
<p style="font-size:25px; color: #7E003E;"><b>Email</b></p>
</th>
<td style="padding-left:200px; text-align:center;">
<p class="dark" style="font-size:25px"><b>anika@gmail.com</b></p>
</td>
</tr>
</table>
</div>
<div style="text-align:center;padding-left:160px">
<a class = "button">Apply Changes</a>
</div>

</body>

<link rel="stylesheet" href="changePasswordAccount.css">

);
}