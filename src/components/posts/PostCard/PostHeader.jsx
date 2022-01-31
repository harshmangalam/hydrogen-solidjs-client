export default function PostHeader() {
  return (
    <section class="flex items-center justify-between px-4 py-2 border-b">
      <div class="flex items-center space-x-2">
        <div class="flex-none">
          <img
            src="https://scontent.fpat2-2.fna.fbcdn.net/v/t39.30808-6/s640x640/273033776_3110201852555547_7552460249623660817_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=73oKk5nWcVEAX8XOAu5&_nc_ht=scontent.fpat2-2.fna&oh=00_AT9UO6WS6byjEM1X9HHtTD3OBxtQnyMb-OdN4_1xZTzoVw&oe=61FBF3A1"
            alt=""
            class="rounded-full w-12 h-12"
          />
        </div>

        <div>
          <h6 class="text-md font-medium">DEV Community</h6>
          <div class="flex items-center space-x-2 ">
            <span class="text-sm text-gray-500">17 h</span>
            <span class="flex items-start">&#8228;</span>
            <span>
              <svg
                viewBox="0 0 16 16"
                width="1em"
                height="1em"
                class=""
                title="Shared with Public"
                fill="gray"
              >
                <title>Shared with Public</title>
                <g fill-rule="evenodd" transform="translate(-448 -544)">
                  <g>
                    <path
                      d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434"
                      transform="translate(354 143.5)"
                    />
                    <path
                      d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096"
                      transform="translate(354 143.5)"
                    />
                    <path
                      fill-rule="nonzero"
                      d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"
                      transform="translate(354 143.5)"
                    />
                  </g>
                </g>
              </svg>
            </span>
          </div>
        </div>
      </div>

      <button class="p-2 hover:bg-gray-100 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
          />
        </svg>
      </button>
    </section>
  );
}
