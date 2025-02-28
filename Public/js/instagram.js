document.addEventListener("DOMContentLoaded", function () {
    const followBtn = document.querySelector(".follow-btn");

    followBtn.addEventListener("click", function () {
        if (followBtn.innerText === "Follow") {
            followBtn.innerText = "Following"; // Text Change
            followBtn.style.backgroundColor = "#ccc"; // Light Gray Background (Disabled Look)
            followBtn.style.color = "black"; // Text Black for Better Contrast
            alert("You are following this user.");
        } else {
            alert("You Unfollow this");
            followBtn.innerText = "Follow"; // Back to Follow
            followBtn.style.backgroundColor = "#007bff"; // Original Blue
            followBtn.style.color = "white"; // White Text
        }
    });
});
