function attachEvents() {
    const url = 'https://messenger-8920d.firebaseio.com/messages.json';
    
    $('#submit').on('click', submitMessage);
    $('#refresh').on('click', reloadPage);

    function submitMessage() {
        let author = $('#author').val();
        let content = $('#content').val();
        let timestamp = Date.now();
        let message = {
            author,
            content,
            timestamp
        };

        $.ajax({
            url: url,
            method: 'POST',
            data: JSON.stringify(message),
            success: logResponse
        });
    }

    function reloadPage() {
        $.ajax({
            url: url,
            method: 'GET',
            success: loadMessages
        });
    }

    function loadMessages(data) {
        let allMessages = '';
        for (let message of Object.values(data)) {
            allMessages += `${message.author}: ${message.content}\n`;
        }
        $('#messages').text(allMessages);
    }

    function logResponse(mess) {
        console.log(mess);
    }
}