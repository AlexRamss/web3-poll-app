document.getElementById('createPollBtn').addEventListener('click', function() {
    document.getElementById('createPollSection').classList.toggle('hidden');
});

document.getElementById('submitPoll').addEventListener('click', function() {
    const pollQuestion = document.getElementById('pollQuestion').value;
    if (pollQuestion) {
        alert("Your poll has been submitted for approval!");
    } else {
        alert("Enter a poll question!");
    }
});

document.getElementById('donateBtn').addEventListener('click', function() {
    const creatorAddress = document.getElementById('donateToCreator').value;
    const platformAddress = document.getElementById('donateToPlatform').value;

    if (creatorAddress && platformAddress) {
        alert(`Donation sent to ${creatorAddress} & ${platformAddress}`);
    } else {
        alert("Enter both addresses to donate!");
    }
});