function navbar(){
    return`<header>
    <div id="navbar">
      <div>
        <img
          id="logo"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAABRFBMVEX////9tRP8/////v////36//////zuLyX6sgD8sQD8//3//f/8sAD5swD8swD5sAD55eX119fulpXrJhv6zG353Z37thPvIRTrEwD23Nv5ysbzqKf9//npFQvpT0jsMCbobWfrMy33xFD4yF/86sL9++70tQBIR07Jyczz8/Tp6em6urvoFQD98/P309HnQTf2vj367tL43JL446r89+H2ui330nz66LT79Nn77snvenj2wb+Lio5oaGoAAAChoaPZ2dzsXFPlSjzxiIPzrarwn5nvtLPxm5LmeXDobmv3zsvtY17sTEfrXV3ww0T2zmfggoHvjYDzwcP8uS3nOT7114fvwTvvfYH60YbxraH8/+/cbWT24JPxuK73x2L5v0b837D61JD83KRiYWQ9PEIiICl8e4BRUFUtLDZBP0mcm6ETEh5LpLAKAAAZ4klEQVR4nO1d+1/bRrYfzYxkaayRDLIlE2QetuXwsMEPSbZDckPCYxOgoY3XLWW30CRtknb//9/vGUl+AU279352CYhvC7ZGkrG+OWfOY87MIPSABzzgAQ94wANSDtzINaiMMSL0tr/K3QAZv2Eod/Bie3X15d4CQox86aYHzECIGm58VypaTqnklIrzBLPb/k5fPygiMsq93VmQ4WBr27Gcl/P7+/PbTnHlQfr+HATTo+NisVhfWvxp3rKcpUdYwD0A+ZNv+8t9/cB4z7Iyy5lMxnGcTHEP6MRIsHrgLOdu+8t99SB0pW45TrHkWEBhaRExRiiliMp0qXh429/uKwfD7LiYWTp4tPXobydOpjSPlcnJveL87X2zO4Es+6H4aguUVcZIOaivYHnKWswX927vm90JyAfbW1hGQlsZwjs5meDJydfF/dv7Zl8zRN9GCaMot+dC90fEceQ8UybH2kuwvGCVFm75e36tIDLDQs4aGIs3hIDFEA3Zo7fZ6AKMlRfFH273S361wKiRW5jbmltYyOUajYaiKKTRWDg6/OHlwajvaxwXtxsPft8sMGWYzi2ubK+CgwywhMu3vApYturF1fmGnJUJY4g92i4uLcgPKYMrwGjnmzrQBmFtqVgXgHijXrIyJ68OtoQqC9vR2IEw5ElDVh5i3llg5UnJskqr3+wt/vTo7VYMUOEGjfSU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"
          alt=""
        />
      </div>
      <div>
      <p><a href="/index.html"> Home </a><p>
      </div>
        <div>
          <div id="search_div">
            <input type="text" name="" id="search" />
          </div>
          <div id="searchRESULT"></div>
        </div>
      <div id="rec_div">
        <p><a href="/today'sRECEIPE.html">Today's Receipe</a></p>
        <p><a href="/random.html">Latest Receipe</a></p>
      </div>
      <div id="signup_div">
        <p><a href ="/signup.html">SignUp</a></p>
        <p><a href ="/login.html">Login</a></p>
        <p id="owner">Profile</p>
      </div>
    </div>
  </header>`
}

export default navbar