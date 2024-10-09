document.addEventListener('DOMContentLoaded', function() {
  const FNotificationId = 'accountRemoveal'; // Change this for each new notification
  const FNotificationImportance = 1; // Change this to set importance level (1, 2, or 3)

  const FNotificationStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');

    .FNotification-container {
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1000;
      font-family: 'Roboto', sans-serif;
    }
    
    .FNotification {
      background-color: #2c2c2c;
      border: 2px solid #7800FF;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.1);
      padding: 15px;
      font-size: 14px;
      color: #e0e0e0;
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
      display: flex;
      align-items: center;
      width: 400px;
      max-width: 90vw;
    }
    
    .FNotification.show {
      opacity: 1;
    }

    .FNotification-icon-container {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 15px;
      flex-shrink: 0;
      background-color: #3c3c3c;
      padding: 5px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
      position: relative;
    }

    .FNotification-icon {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform-origin: top center;
    }

    .FNotification-content {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .FNotification-message {
      margin-right: 10px;
      font-weight: 400;
    }

    .FNotification-buttons {
      display: flex;
    }

    .FNotification-btn {
      padding: 8px 16px;
      margin-left: 10px;
      border: 2px solid #000;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      transition: all 0.3s ease;
      background-color: #7800FF;
      color: #ffffff;
    }

    .FNotification-btn:hover {
      background-color: #7212e0;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }

    .FNotification-importance-1 {
      background-color: #2c2c2c;
    }

    .FNotification-importance-1 .FNotification-icon-container {
      background-color: #3c3c3c;
    }

    .FNotification-importance-2 {
      background-color: #3c3c3c;
    }

    .FNotification-importance-2 .FNotification-icon-container {
      background-color: #ff8800;
    }

    .FNotification-importance-3 {
      background-color: #3c3c3c;
      border: 3px solid #ff0000;
    }

    .FNotification-importance-3 .FNotification-icon-container {
      background-color: #ff0000;
    }

    @keyframes FNotification-shake {
      0% { transform: rotate(0deg); }
      25% { transform: rotate(-15deg); }
      50% { transform: rotate(15deg); }
      75% { transform: rotate(-15deg); }
      100% { transform: rotate(0deg); }
    }

    .FNotification-shake .FNotification-icon {
      animation: FNotification-shake 0.5s;
    }

    .FNotification-modal {
      display: none;
      position: fixed;
      z-index: 9999;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.7);
      justify-content: center;
      align-items: center;
    }

    .FNotification-modal-content {
      background-color: #2c2c2c;
      color: #e0e0e0;
      padding: 20px;
      border-radius: 10px;
      max-width: 80%;
      max-height: 80%;
      overflow: auto;
      border: 2px solid #8e44ad;
      box-shadow: 0 0 20px rgba(142, 68, 173, 0.3);
      font-family: 'Roboto', sans-serif;
    }

    .FNotification-close-btn {
      display: block;
      margin: 20px auto 0;
      padding: 10px 20px;
      background-color: #8e44ad;
      color: white;
      border: 2px solid #000;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 500;
      font-family: 'Roboto', sans-serif;
    }

    .FNotification-close-btn:hover {
      background-color: #9b59b6;
    }

    .FNotification-modal p {
      line-height: 1.2;
      }
  `;

  const FNotificationStyleElement = document.createElement('style');
  FNotificationStyleElement.textContent = FNotificationStyles;
  document.head.appendChild(FNotificationStyleElement);

  function FNotificationCreateNotification() {
    const notificationContainer = document.createElement('div');
    notificationContainer.className = 'FNotification-container';
    notificationContainer.innerHTML = `
      <div id="FNotification" class="FNotification FNotification-importance-${FNotificationImportance}">
        <div class="FNotification-icon-container">
          <img class="FNotification-icon" src="https://cdn-icons-png.flaticon.com/128/16861/16861361.png" alt="Sphere icon" width="40" height="40">
        </div>
        <div class="FNotification-content">
          <span class="FNotification-message">New Notification!</span>
          <div class="FNotification-buttons">
            <button class="FNotification-btn FNotification-btn-open" onclick="FNotificationOpen()">Open</button>
            ${FNotificationImportance < 3 ? '<button class="FNotification-btn FNotification-btn-dismiss" onclick="FNotificationDismiss()">Dismiss</button>' : ''}
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(notificationContainer);

    const modal = document.createElement('div');
    modal.className = 'FNotification-modal';
    modal.innerHTML = `
      <div class="FNotification-modal-content">
        <h2>Accounts have been removed</h2>
        <p>
        Enjoy fracture fully without restriction<br>
        </p>
        <button class="FNotification-close-btn" onclick="FNotificationClose()">Close Notification</button>
      </div>
    `;
    document.body.appendChild(modal);
  }

  function FNotificationShow() {
    const notification = document.getElementById('FNotification');
    notification.classList.add('show');

    if (FNotificationImportance === 3) {
      setInterval(() => {
        const icon = notification.querySelector('.FNotification-icon');
        icon.classList.add('FNotification-shake');
        setTimeout(() => {
          icon.classList.remove('FNotification-shake');
        }, 500);
      }, 6000);
    }
  }

  function FNotificationCheckStatus() {
    const status = localStorage.getItem('FNotificationStatus');
    const storedId = localStorage.getItem('FNotificationId');

    if (storedId === FNotificationId && status === 'Read') {
      return false;
    }
    return true;
  }

  if (FNotificationCheckStatus()) {
    FNotificationCreateNotification();
    FNotificationShow();
    localStorage.setItem('FNotificationId', FNotificationId);
  }

  // Adding global functions
  window.FNotificationOpen = function() {
    document.querySelector('.FNotification-modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
  };

  window.FNotificationDismiss = function() {
    document.getElementById('FNotification').classList.remove('show');
    setTimeout(() => {
      document.querySelector('.FNotification-container').remove();
    }, 500);
    localStorage.setItem('FNotificationStatus', 'Read');
    localStorage.setItem('FNotificationWait', new Date().toISOString());
  };

  window.FNotificationClose = function() {
    document.querySelector('.FNotification-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
    localStorage.setItem('FNotificationStatus', 'Read');
    localStorage.setItem('FNotificationWait', new Date().toISOString());
    FNotificationDismiss();
  };
});