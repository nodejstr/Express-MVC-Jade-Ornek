var express = require('express'),
    app = express(),
    urun = require('./urun.js');
app.listen(3000);

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

app.get('/urun', function(req, res) {
    var urun1 = new urun({ adi: 'Portakal', kategoriler: [{ kategoriAdi: 'Meyve'},{ kategoriAdi: 'Kış Meyvesi'}] });
    //res.send(urun1);
    res.render('index', {data :urun1});
});

console.log('Server started...');