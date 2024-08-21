import React from 'react'

export default function Nav() {
  return (
    <div>
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  NewsMonk
</button>

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">NewsMonk</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
        Go TO
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="/Home">Home</a></li>
        <li><a class="dropdown-item" href="/Jsscse">CSE-News</a></li>
        <li><a class="dropdown-item" href="/Jssise">ISE-News</a></li>
        <li><a class="dropdown-item" href="/Jssnss">NSS-News</a></li>
        <li><a class="dropdown-item" href="/Yoga">YOGA-News</a></li>
      </ul>
    </div>
  </div>
</div>
    </div>
  )
}
