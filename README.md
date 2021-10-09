<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="dynamic.css" rel="stylesheet" type="text/css">
    <script src="https://unpkg.com/vue@3.0.2"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"></script>
    <script src="dynamic.js" defer ></script>
    <title>DYNAMIC BINDING</title>
</head>
<body>
   
  <header class="content">
    <h1>Dynamic Styling</h1>
   
</header>

<section class="content" id="my_app">
    <div class="input-field">
        <input 
              @input="user_input" 
              type="text" 
              v-model="user" 
              placeholder="Input:user1, user2">

        <div 
               class="output" 
               :class="[active ? 'visible' : 'hidden']" >
            <p :class="{user1: user1, user2: user2}" >Style me!</p>
            
        </div>
    </div>
    <button  @click="btn_Toggle">Toggle Paragraph</button>
    <input @keyup="input_Color" type="text" placeholder="Input: Any Color ">
    <p :style="{backgroundColor: activeColor}" >Your input color is {{color}} </p>
</section>
</body>
</html>
