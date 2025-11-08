exports.handler = async function(event, context) {
  try {
    console.log('🚀 Starting daily AI notifications...');
    
    // Your AI message generation
    const messages = [
      "💪 Stay strong! Your journey to self-control matters every day.",
      "🌟 Remember why you started this. You're building a better version of yourself!",
      "🔥 Every small victory counts. Keep that streak going!",
      "🎯 One day at a time, one victory at a time. You've got this!",
      "⚡ You're stronger than your urges. Keep that willpower muscle flexed!"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const title = "NoMore Daily Motivation";
    
    console.log('📢 AI Message ready:', title, '-', randomMessage);
    
    // For now, we return success
    // The notification will be sent via local notifications in your app
    
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: 'AI Notification: ' + randomMessage,
        note: 'Local notifications are scheduled in your app. FCM tokens are being collected for future push notifications.'
      })
    };
    
  } catch (error) {
    console.error('❌ Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
