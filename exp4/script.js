document.getElementById('button1').addEventListener('click', function() {
  const myWindow = window.open(
      'https://www.youtube.com/',
      'MyNewWindow',
      'width=500,height=300,top=100,left=200,toolbar=no,scrollbars=yes,resizable=yes'
  );
});

document.getElementById('button2').addEventListener('click', function() {
  const blankWindow = window.alert('you have opended an new alert tab');
});