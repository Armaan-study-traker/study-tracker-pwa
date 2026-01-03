function notify() {
  Notification.requestPermission().then(p => {
    if (p === "granted") {
      new Notification("📚 Study Time", {
        body: "Good morning! Start your study session 💪"
      });
    }
  });
}
